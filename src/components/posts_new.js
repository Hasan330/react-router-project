import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { Link } from 'react-router-dom';

class PostsNew extends Component {

	renderField(field){
		const { meta: { touched, error } } = field;  //destructuring  field --> meta --> touched, error
		const className = `form-group ${touched && error? 'has-danger': ''}`;  //conditional styling

		return(
			<div className={className}>
				<label> {field.label} </label>
				<input
					className='form-control'
					{...field.input}
				/>
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		)
	}

	onSubmit(values){
		// this === component
		console.log(values);
	}

	render(){
		const { handleSubmit } = this.props;

		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="Title"
					name="title"
					component={this.renderField}
				/>

				<Field
					label="Categories"
					name="categories"
					component={this.renderField}
				/>

				<Field
					label="Post Content"
					name="content"
					component={this.renderField}
				/>

				<button type="submit" className="btn btn-primary"> Submit </button>
				<Link className='btn btn-danger' to='/'>
						Cancel
				</Link>

			</form>
		)
	}
}

function validate(values){
	//console.log(values) --> { title: 'asda', categories: 'hsda', content: 'asdr'}

	const errors ={};

	//Validate the inputs from 'values'
	if(!values.title || values.title.length < 3){
		errors.title = "Enter a title that is at least 3 characters long!"
	}

	if(!values.categories){
		errors.categories = "Enter some categories"
	}

	if(!values.content){
		errors.content = "Enter some content please"
	}

	//If errors is empty, the form is fine to submit
	//If errors has *any* properties, redux form assumes form is invalid
	return errors;
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
}) (PostsNew);