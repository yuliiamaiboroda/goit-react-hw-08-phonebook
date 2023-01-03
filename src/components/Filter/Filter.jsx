import { useDispatch } from "react-redux";
import {Label, Input} from "./Filter.styled";
import { setFilter } from "redux/filter/filter-slice";

export default function Filter (){
  const dispatch = useDispatch()
   const handleChangeInput = (e) => {
        const value = e.currentTarget.value.toLowerCase();
        dispatch(setFilter(value));
      }
    return ( <Label>
        Find contacts by name
        <Input
        type="text"
        name="Filter"
        onChange={handleChangeInput}
        />
        </Label>)
    
}
