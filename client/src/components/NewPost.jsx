import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostEmail from './PostEmail';
import PostBody from './PostBody';
import { submitPost } from '../actions'

class NewPost extends Component {

    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <div className='new-post-form'>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field
                        component={PostEmail}
                        type="text"
                        label='Enter Email'
                        name='email'
                    />
                    <Field
                        component={PostBody}
                        type="text"
                        label='Enter text'
                        name='text'
                    />

                    <button type="submit" className="teal btn-flat right white-text">
                        Post
                    </button>
                </form>
            </div>
        );
    }

    onSubmit(values) {
        this.props.submitPost(values);
    }
}


function validate(values) {
    const errors = {};
    if (!values.text) {
        errors.text = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitPost}, dispatch);
}

export default connect(null, mapDispatchToProps)(reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(NewPost));
