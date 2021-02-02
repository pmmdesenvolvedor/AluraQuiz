import React from 'react';

const QuizDaGaleraPage = props => {
  return (
    <div style={{'color': 'black'}}>
      <h2>Quiz da galera</h2>

      <pre>
        { JSON.stringify(props, null, 4)}
      </pre>
    </div>
  )
}
export default QuizDaGaleraPage;

export async function getServerSideProps(context) {
  
  const dbExterno = await fetch('https://aluraquiz-css.omariosouto.vercel.app/api/db')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Falha na tentativa de recuperar os dados.');
  })
  .catch((err) => {
    console.error(err)
  });

  console.log('dbExterno', dbExterno);

  return {
    props: dbExterno, // will be passed to the page component as props
  }
}