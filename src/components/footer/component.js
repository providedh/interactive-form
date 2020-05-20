import React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

export default function Component(props) {

    return(
    	<div className={"bg-white " +styles.footer}>
    		<div className="container-lg">
	    		<div className="copyright pt-3">
	    			<div className={"d-flex flex-wrap flex-md-column justify-content-center "+styles.footerCopyright}>
		              <span className="small">Copyright © 2019-2020</span>
		              <a href="https://PROVIDEDH.eu" className="ml-1 ml-md-0 small">PROVIDEDH.eu</a>
		            </div>
	    		</div>
	    		<div className="logos">
	    			<ul className="footer-cooperate d-flex flex-wrap justify-content-center list-unstyled mt-3 mt-md-5 mb-3">
			            <img src="public/img/cooperation/1.png" className="mt-2 mb-2 ml-4 mr-4 "/>
			            <img src="public/img/cooperation/pcss.svg" className="mt-2 mb-2 ml-4 mr-4  --pcss"/>
			            <img src="public/img/cooperation/3.png" className="mt-2 mb-2 ml-4 mr-4 "/>
			            <img src="public/img/cooperation/4.png" className="mt-2 mb-2 ml-4 mr-4 "/>
			            <img src="public/img/cooperation/5.png" className="mt-2 mb-2 ml-4 mr-4 "/>
			            <img src="public/img/cooperation/6.png" className="mt-2 mb-2 ml-4 mr-4 "/>
			            <img src="public/img/cooperation/7.png" className="mt-2 mb-2 ml-4 mr-4 "/>
			            <img src="public/img/cooperation/8.png" className="mt-2 mb-2 ml-4 mr-4 "/>
			            <img src="public/img/cooperation/9.png" className="mt-2 mb-2 ml-4 mr-4 "/>
			            <img src="public/img/cooperation/10.png" className="mt-2 mb-2 ml-4 mr-4 "/>
			            <img src="public/img/cooperation/11.png" className="mt-2 mb-2 ml-4 mr-4 "/>
			        </ul>
	    		</div>
    		</div>
	    	<div className={styles.lowerSpacer}></div>
    	</div>
    	);
}
