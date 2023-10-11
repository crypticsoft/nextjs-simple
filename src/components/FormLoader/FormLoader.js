import React, { useState, useEffect } from 'react';
import Form from '../../third-party/kwes-react-form/dist/entry-form';
import { Builder } from '@builder.io/react';

import kwesforms from 'kwesforms';
import PropTypes from 'prop-types';

const getData = (url) => {
  return new Promise(async (resolve, reject) => {

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const formData = await response.json();
      resolve(formData);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

const FormLoader = ({ id, data, action, handler }) => {
  const [formData, setFormData] = useState({});
  const isValidUrl = urlString =>{
    var inputElement = document.createElement('input');
    inputElement.type = 'url';
    inputElement.value = urlString;

    if (!inputElement.checkValidity()) {
      console.log('Not a valid URL', urlString);
      return false;
    } else {
      return true;
    }
  }

  useEffect(() => {
    // fetch the data beforehand
    try {
      if (isValidUrl(data)) {
        getData(data).then((formData) => {
          // setIsLoaded(true);
          setFormData(formData);
        });
      } else if (JSON.parse(data)) {
        setFormData(JSON.parse(data));
      }

      // only initialize kwesforms if we're not in preview mode
      if (!Builder.isPreviewing || !Builder.isEditing) {
        setTimeout(() => {
          kwesforms.init();
        }, 500);
      }
    } catch (error) {
      throw new Error('Unable to load the form data. Please try a valid URL or a valid object.');
    }
  }, []);

  if (!formData) {
    return <div>Loading...</div>;
  }

  return <Form id={id ?? formData.id} data={formData} action={action} handler={handler} />;
};


FormLoader.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.any.isRequired,
  action: PropTypes.string,
  handler: PropTypes.any,
  method: PropTypes.string,
};

export default FormLoader;
