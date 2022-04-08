import Button from '@material-ui/core/Button';
//types
import {CartItemType} from '../App'
import { Wrapper } from './Item.styles';
// styles
type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType)=> void;

}

const Item: React.FC<Props> = ({item, handleAddToCart}) => (
    <Wrapper>
        <img src={item.image} alt={item.title}/>
        <div>
            <h3>{item.title.slice(0,45)}</h3>
            <p>{item.description.slice(0,154)}...</p>
            <h3>{item.price}</h3>
        </div>
        <Button onClick={()=> handleAddToCart(item)}>Add</Button>
    </Wrapper>
)
export default Item;