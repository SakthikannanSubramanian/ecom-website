import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import "./../../index.css";

export const InputField = (props) => {
  console.log("***" + props.styleEffect);
  return (
    <TextField
      fullWidth
      id="outlined-search"
      label={props.placeholder}
      type="search"
      className={props.styleEffect}
    />
  );
};

export const SearchInputField = (props) => {
  return (
    <TextField
      fullWidth
      id="outlined-search"
      label={props.placeholder}
      type="search"
      style={{ background: "#FFFFFF", width: "30rem" }}
    />
  );
};
