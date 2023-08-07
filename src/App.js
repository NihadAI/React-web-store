import React, { useState } from "react";
import "./App.scss";
import Button from "./Button";
import Modal from "./Modal";

const App = () => {
  const [firstModalOpen, setFirstModalOpen] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);

  const openFirstModal = () => {
    setFirstModalOpen(true);
  };

  const closeFirstModal = () => {
    setFirstModalOpen(false);
  };

  const openSecondModal = () => {
    setSecondModalOpen(true);
  };

  const closeSecondModal = () => {
    setSecondModalOpen(false);
  };

  return (
    <div className="App">
      <Button
        backgroundColor="#007bff"
        text="Open first modal"
        onClick={openFirstModal}
      />
      <Button
        backgroundColor="#28a745"
        text="Open second modal"
        onClick={openSecondModal}
      />

      {firstModalOpen && (
        <Modal
          header="First Modal"
          closeButton={true}
          text="This is the first modal window."
          actions={
            <div>
              <button onClick={closeFirstModal}>Close</button>
            </div>
          }
          onClose={closeFirstModal}
        />
      )}

      {secondModalOpen && (
        <Modal
          header="Second Modal"
          closeButton={true}
          text="This is the second modal window."
          actions={
            <div>
              <button onClick={closeSecondModal}>Close</button>
            </div>
          }
          onClose={closeSecondModal}
        />
      )}
    </div>
  );
};

export default App;
  