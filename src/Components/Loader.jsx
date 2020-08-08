import React from "react";
import Loader from 'react-loader-web'
import "../Styles/Loader.css";

const LoaderSpinner = ({visible}) => {
    return (
        <Loader
            className="custom-loader"
            type="Square"
            color="#8A8A8A"
            visible={visible}
        />
    );
}

export default LoaderSpinner;

