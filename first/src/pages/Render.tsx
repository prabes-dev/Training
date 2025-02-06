import Cond1 from "../components/Cond1";
import Cond2 from "../components/Cond2";


const Render = () => {
  const Display = true;
  const Message = Display ? <Cond1 /> : <Cond2 />
  return Message

}
export default Render