import {ImBin} from "react-icons/im"
import { Item, List, Button } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, selectVisibleContacts } from "redux/selectors";
import { deleteContacts } from "redux/operations";

const ContactList = () => {
    const filteredContacts = useSelector(selectVisibleContacts);
    const savedFilter = useSelector(selectFilter)
    const dispatch = useDispatch();

    return(
    <List>
        {filteredContacts.map(({ id, name, phone }) => (
      <Item key={id}>
                {name} : {phone}
            {<Button
                type="button"
                name="delete"
                value={savedFilter}
                onClick={() => dispatch(deleteContacts(id))}>
                <ImBin fill="#000000" width="20" height="20"/>
                delete
                </Button>}
        </Item>
     ))}
    </List>
    )
}

export default ContactList;