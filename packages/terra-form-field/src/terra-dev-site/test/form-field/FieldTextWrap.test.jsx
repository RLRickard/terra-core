import React from 'react';
import Field from '../../../Field';

const FieldExamples = () => (
  <div style={{ width: '250px' }}>
    <Field
      id="field"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label Field Label Field Label Field Label Field Label Field Label Field Label Field Label"
      help="Help Message Help Message Help Message Help Message Help Message Help Message Help Message Help Message"
      error="Error Message Error Message Error Message Error Message Error Message Error Message Error Message"
      isInvalid
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
  </div>
);

export default FieldExamples;
