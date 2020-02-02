import React, { useEffect, useState } from 'react';
import Tabletop from 'tabletop';
import FilterResults from 'react-filter-search';
import ContentLoader from 'react-content-loader';

import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

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

  function handleChange(event) {
    const { value } = event.target;

    setValue(value);
  }

  const MyLoader = () => (
    <ContentLoader viewBox="0 0 380 150">
      {/* Row 1 */}
      <rect x="0" y="17" rx="5" ry="5" width="70" height="10" />
      <rect x="80" y="17" rx="5" ry="5" width="70" height="10" />
      <rect x="160" y="17" rx="5" ry="5" width="70" height="10" />
      <rect x="240" y="17" rx="5" ry="5" width="70" height="10" />
      {/* Row 2 y="17 + (17)" */}
      <rect x="0" y="34" rx="5" ry="5" width="70" height="10" />
      <rect x="80" y="34" rx="5" ry="5" width="70" height="10" />
      <rect x="160" y="34" rx="5" ry="5" width="70" height="10" />
      <rect x="240" y="34" rx="5" ry="5" width="70" height="10" />
      {/* Row 3 y="17 + (17) + (17)" */}
      <rect x="0" y="51" rx="5" ry="5" width="70" height="10" />
      <rect x="80" y="51" rx="5" ry="5" width="70" height="10" />
      <rect x="160" y="51" rx="5" ry="5" width="70" height="10" />
      <rect x="240" y="51" rx="5" ry="5" width="70" height="10" />
      {/* Row 4 y="17 + (17) + (17) + (17)" */}
      <rect x="0" y="68" rx="5" ry="5" width="70" height="10" />
      <rect x="80" y="68" rx="5" ry="5" width="70" height="10" />
      <rect x="160" y="68" rx="5" ry="5" width="70" height="10" />
      <rect x="240" y="68" rx="5" ry="5" width="70" height="10" />
    </ContentLoader>
  );

  if (data.length === 0) {
    return (
      <>
        <MyLoader />
      </>
    );
  }

  return (
    <>
      <div className="search-div">
        <input
          name="searchKeyword"
          id="searchKeyword"
          placeholder="Pesquise por Curso"
          className="search-course"
          value={value}
          onChange={handleChange}
        />
        <span className="search-icon" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome do Curso</th>
            <th>Referência</th>
            <th>Valor Real</th>
            <th>Valor com Desconto</th>
            <th>Conhecer o Curso</th>
          </tr>
        </thead>
        <FilterResults
          value={value}
          data={data}
          renderResults={data => (
            <tbody>
              {data.map(obj => {
                return (
                  <tr key={obj.Curso}>
                    <td>{obj.Curso}</td>
                    <td>{obj.Referência}</td>
                    <td>{obj.Valor}</td>
                    <td>{obj.Antecipado}</td>
                    <td>
                      <a
                        href={obj.Link}
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
          )}
        />
      </table>
    </>
  );
}

export default App;
