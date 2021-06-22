// import React, { memo } from "react";
// // import PropTypes from "prop-types";
// import pluginId from "../../pluginId";
// import UploadFileForm from "../../components/UploadFileForm";
//
// const HomePage = () => {
//   return <UploadFileForm />;
// };
// export default memo(HomePage);

/*
 *
 * HomePage
 *
 */

import React, { memo, useState, useEffect } from "react";
import { auth } from "strapi-helper-plugin";
import axios from "axios";

// import PropTypes from 'prop-types';

const getHeaders = () => ({
  headers: {
    Authorization: `Bearer ${auth.getToken()}`,
  },
});

const getColoringPageTypeFromStorage = () => localStorage.getItem('coloringPageType') || 'coloring';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [imported, setImported] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [coloringPageType, setCloringPageType] = useState(getColoringPageTypeFromStorage());

  const handleImportCsv = ({ target: { files } }) => {
    if (!files) return;

    setLoading(true);
    const data = new FormData();
    data.append("files", files[0]);

    axios
      .post(`${strapi.backendURL}/import-content/animals`, data, getHeaders())
      .then(() => setImported(true))
      .finally(() => setLoading(false));
  };

  const handleSyncDrive = async () => {
    setSyncing(true);
    const { data } = await axios.get(
      `${strapi.backendURL}/import-content/coloring-pages/auth`,
      getHeaders()
    );
    window.location = data.authUrl;
  };

  const handleSetColoringPageType = (type) => {
    setCloringPageType(type);
    localStorage.setItem('coloringPageType', type);
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authCode = urlParams.get("code");
    if (authCode) {
      axios
        .post(
          `${strapi.backendURL}/import-content/coloring-pages`,
          { authCode, coloringPageType: getColoringPageTypeFromStorage() },
          getHeaders()
        )
        .then((res) => console.log("success", res))
        .catch((err) => console.log("error", err));
    }
  }, []);

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h1>Kidadl API Data Import plugin</h1>
        <p>These functions are triggers for custom data import scripts.</p>
        <p>
          <strong>
            YOU MUST BE A <u>SUPER ADMIN</u> TO RUN THESE ACTIONS (AND PLEASE
            KNOW WHAT YOU'RE DOING)
          </strong>
        </p>
      </div>
      <div style={{ padding: "0 20px 20px 20px" }}>
        <h2 style={{ marginTop: "20px" }}>Import Animals CSV</h2>
        {imported && (
          <p style={{ color: "green", margin: "12px 0px" }}>
            The CSV is being imported into Strapi in the background. It might
            take up to 30minutes for the data to appear in the CMS.
          </p>
        )}
        {loading && <p>Loading...</p>}
        {!loading && (
          <input
            type="file"
            name="file_input"
            accept=".csv"
            onChange={handleImportCsv}
          />
        )}
        <h2 style={{ marginTop: "20px" }}>Sync Coloring Pages Drive</h2>
        <p>
          Authorize google drive for coloring pages import (you will be
          redirected)
        </p>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
          <input
            type="radio"
            checked={coloringPageType == "coloring"}
            onChange={() => handleSetColoringPageType('coloring')}
            value="coloring"
          />
          <label style={{ margin: '0 8px' }}>Coloring Pages</label>
          <input
            type="radio"
            checked={coloringPageType == "stencil"}
            onChange={() => handleSetColoringPageType('stencil')}
            value="stencil"
          />
          <label style={{ margin: '0 8px' }}>Stencils</label>
        </div>
        {!syncing && (
          <button
            style={{
              padding: "10px",
              border: "1px solid grey",
              borderRadius: "4px",
            }}
            onClick={handleSyncDrive}
          >
            Authorize
          </button>
        )}
        {syncing && (
          <p>
            Sync successful, please wait atleast 10minutes before syncing again
          </p>
        )}
      </div>
    </div>
  );
};

export default memo(HomePage);

