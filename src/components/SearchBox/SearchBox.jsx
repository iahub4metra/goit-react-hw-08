import css from "./SearchBox.module.css"
import { useDispatch, useSelector } from "react-redux"
import { changeFilter } from "../../redux/filters/slice"
import { selectNameFilter } from "../../redux/filters/selectors"
import { TextField } from "@mui/material"
const SearchBox = () => {
    const dispatch = useDispatch()
    const filter = useSelector(selectNameFilter)
    const handleChange = (e) => {
        const text = e.target.value
        dispatch(changeFilter(text))
    }
    return (
        <div className={css.containerSearch}>
            <TextField
                type="search"
                value={filter}
                onChange={handleChange}
                name="filteredSearch"
                size="small"
                sx={{ width: '260px' }}
                label="Find contacts by name"
            />
        </div>
    )
}
export default SearchBox