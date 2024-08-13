import css from "./SearchBox.module.css"
import { useDispatch, useSelector } from "react-redux"
import { changeFilter } from "../../redux/filters/slice"
import {selectNameFilter} from "../../redux/filters/selectors"
const SearchBox = () => {
    const dispatch = useDispatch()
    const filter = useSelector(selectNameFilter)
    const handleChange = (e) => {
        const text = e.target.value
        dispatch(changeFilter(text))
    }
    return (
        <div>
            <p className={css.labelSearch}>Find contacts by name</p>
            <input className={css.searchInput} type="text" value={filter} onChange={handleChange} name="filteredSearch" />
        </div>
    )
}
export default SearchBox