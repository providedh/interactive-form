import $ from 'jquery';
import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

        window.ajax = $.ajax
export default function Component({state}) {
  const {annotations, user, taxonomy} = state
  const annotationList = []
  
  Object.entries(annotations)
    .forEach(([source, sourceAnnotations]) => {
        Object.values(sourceAnnotations).forEach(annotation => {
            annotationList.push(Object.assign({}, {source}, annotation))
        })
    })
        
	function sendSurvey(e){
		e.preventDefault()
        /*
	    const csrftoken = '';//jQuery("[name=csrfmiddlewaretoken]").val();
	    $.ajaxSetup({
	        beforeSend: function(xhr, settings) {
	            xhr.setRequestHeader("X-CSRFToken", csrftoken);
	        }
	    });
        */
	    $.ajax({
	        type: "POST",
	        url: "https://providedh-form-server.westeurope.azurecontainer.io/form",
	        data: JSON.stringify({annotations: annotationList, user, taxonomy}),
	        dataType: "json",
	        contentType : 'application/json',
	        success: function(resultData){
	        	console.log(resultData);
	            //window.location.href = '/projects/' + resultData.id
	        },
	        error: function (xhr, ajaxOptions, thrownError) {
	        	console.log(xhr);
	        }
	    });
	}
    return(
    	<div>
    		<div className="row px-5">
    			<div className="col">
				    <table className="table table-striped table-bordered">
					  <thead>
					    <tr>
					      <th scope="col">Personal information</th>
					      <th scope="col"></th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <td>Age</td>
					      <td>{state.user.age}</td>
					    </tr>
					    <tr>
					      <td>Gender</td>
					      <td>{state.user.gender}</td>
					    </tr>
					    <tr>
					      <td>Highest education</td>
					      <td>{state.user.education}</td>
					    </tr>
					    <tr>
					      <td>Work/research field</td>
					      <td>{state.user.field}</td>
					    </tr>
					    <tr>
					      <td>Researcher</td>
					      <td>{state.user.researcher}</td>
					    </tr>
					    <tr>
					      <td>Previous knowledge on Digital Humanities</td>
					      <td>{state.user.previousDH}</td>
					    </tr>
					  </tbody>
					</table>
				</div>
				<div className="col">
					<table className="table table-striped table-bordered">
					  	<thead>
					    	<tr><th scope="col">Taxonomy</th></tr>
					  	</thead>
					  	<tbody>
					  		{state.taxonomy.categories.map(x=>(
						    	<tr key={x}><td>{x}</td></tr>
					  		))}
					  	</tbody>
					</table>
				</div>
			</div>
			<form className="d-flex justify-content-center">
	    		<button type="submit" onClick={sendSurvey} className="btn btn-primary">Submit your responses</button>
			</form>
		</div>
    	);
}
