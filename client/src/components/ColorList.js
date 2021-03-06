import React, { useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
 
const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();

    console.log("This is what is stored in the paratmere: ", e);
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is it saved right now?

    axiosWithAuth()
    .put(`colors/${colorToEdit.id}`, colorToEdit)
    .then(res => {
      // const newColors = [...colors];
      // newColors[colors.findIndex((color) => color === res.data.id)] = res.data;
      // console.log(res.data);
      // updateColors(newColors);
      axiosWithAuth()
      .get(`colors/`)
      .then(res => {
        updateColors(res.data);
      })
    })
    
    .catch(err => console.log(err))

  // } [props.colors, props.match.params.id];
  }


  const deleteColor = color => {
    // make a delete request to delete this color
    
    axiosWithAuth()
    .delete(`colors/${color.id}`)
    .then(
      axiosWithAuth()
      .get(`colors/`)
      .then(res => {
        updateColors(res.data);
      })
      // const newColors = [...colors];
      // newColors[colors.findIndex((color) => color === res.data.id)] = res.data;
      // updateColors(newColors);
    )
    .catch(err => console.log(err))
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                X  
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
