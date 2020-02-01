import React, { useEffect, useState } from 'react';
import Tabletop from 'tabletop';

function App() {
  const [data, setData] = useState([]);
  const ie = 'http://metodista.br/';

  useEffect(() => {
    Tabletop.init({
      key: '1QpPgpAKyZXvwirnHekmSWqYsaT7s0B4Szd0UsYEEPJw',
      orderby: 'Curso',
      reverse: false,
      wanted: ['UMESP'],

      callback: googleData => {
        setData(googleData);
      },
      simpleSheet: true,
    });
  }, []);

if (data.length === 0) {
  return (
    <>
      <h1>Carregando!</h1>
    </>
  )
}


  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nome do Curso</th>
            <th>Referência</th>
            <th>Valor Real</th>
            <th>Valor com Desconto</th>
            <th>Página do Curso</th>
          </tr>
        </thead>
        <tbody>
          {data.map(obj => {
            return (
              <tr key={obj.Curso}>
                <td>
                  {obj.Curso}
                </td>
                <td>
                  {obj.Referência}
                </td>
                <td>
                  {obj.Valor}
                </td>
                <td>
                  {obj.Antecipado}
                </td>
                <td>
                  <a
                    href={`${ie}/graduacao-presencial/${obj.Curso.toLowerCase().replace(/\s/g, '-')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success btn-sm"
                  >
                    Conhecer Curso
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
