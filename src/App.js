import { useEffect, useState } from "react";
import "./styles.css";
import { MdArrowDownward } from "react-icons/md";
import { MdArrowUpward } from "react-icons/md";
import { MdCreateNewFolder } from "react-icons/md";
import { FaFile } from "react-icons/fa";

export default function App() {
  const [folder, setFolder] = useState([
    {
      id: "1",
      file: ["abc.js", "primenumver,js", "sorting.js"],
      folderName: "first folder",
      folder: [],
      folderBtn: <MdCreateNewFolder />,
      fileButton: <FaFile />,
    },
    {
      id: "2",
      file: ["abc.js"],
      folder: [],
      folderName: "Second folder",
      folderBtn: <MdCreateNewFolder />,
      fileButton: <FaFile />,
    },
  ]);
  const [folderId, setFolderId] = useState("");
  const [inputisActive, setinputIsActive] = useState(false);
  const [input, setInput] = useState("");
  const [selectedFolder, setSelectedFolder] = useState([]);

  const openCarosel = (v) => {
    console.log(v);
    setFolderId(v);
    setinputIsActive(false);
  };

  const createFile = (folderId) => {
    console.log(folderId);

    const selectedFolder = folder.filter(
      (items) => items && items.id === folderId
    );
    setSelectedFolder(selectedFolder);
  };

  const handleSubmit = () => {
    const newFolder = selectedFolder[0]?.file.push(input);
    if (!input) {
      return alert("Something went wrong");
    }
    setFolder((val) => [...val, newFolder]);
    setInput("");
  };

  return (
    <div className="App">
      <div className="left">
        {folder?.map((items) => (
          <div key={items.id} style={{ marginBottom: "1rem" }}>
            <span style={{ cursor: "pointer" }}>
              <span
                onClick={() => {
                  openCarosel(items.id);
                  setFolderId(items.id);
                }}
              >
                {items.folderName}
              </span>
              <span
                onClick={() => {
                  createFile(items.id);
                  setinputIsActive(!inputisActive);
                }}
              >
                {items.fileButton}
              </span>{" "}
              {items.folderBtn}
              {folderId === items.id && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "grey",
                    marginBottom: "2",
                    gap: "0.5rem",
                  }}
                >
                  {folderId === items.id && inputisActive && (
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                  )}
                  {items?.file?.map((items) => (
                    <div
                      style={{ border: "1px solid white", marginTop: "0.4rem" }}
                      key={folderId}
                    >
                      {items}
                    </div>
                  ))}
                </div>
              )}
            </span>
          </div>
        ))}
      </div>
      <div
        className="right"
        onClick={() => {
          setFolderId("");
        }}
      >
        This is Right
        <button onClick={handleSubmit}>Add </button>
      </div>
    </div>
  );
}
