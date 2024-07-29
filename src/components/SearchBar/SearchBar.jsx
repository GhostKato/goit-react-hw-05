import s from './SearchBar.module.css'
import { Field, Form, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ setQuery }) => {

  const initialValues = {
    query: '',
  };

  const handleSubmit = (values) => {
    const { query } = values;   

     if (!query.trim()) {
      toast.error('Search field is empty.');
      return;
    }    
    setQuery(query);
  };  
      
  return (
    <div className={s.container}>
       <Toaster position='top-right' />
     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field className={s.input} placeholder='Search movies' type='search'  name='query'   
          />
          <button className={s.btn} type='submit'>Search</button>
        </Form>
     </Formik></div>
  )
}

export default SearchBar