import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactEditor.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactEditor = () => {
  const userNameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={userNameId}>Name</label>
        <ErrorMessage name="username" component="span" className={css.error} />
        <Field className={css.field} type="text" name="name" id={userNameId} />

        <label htmlFor={numberId}>Number</label>
        <ErrorMessage name="phone" component="span" className={css.error} />
        <Field className={css.field} type="phone" name="number" id={numberId} />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

// export const ContactEditor = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const text = form.elements.text.value;
//     if (text !== '') {
//       dispatch(addContact(text));
//       form.reset();
//       return;
//     }
//     alert('Task cannot be empty. Enter some text!');
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <input name="text" className={css.input} />
//       <button type="submit" className={css.button}>
//         Add task
//       </button>
//     </form>
//   );
// };
