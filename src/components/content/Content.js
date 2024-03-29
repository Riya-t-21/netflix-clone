import "./Content.css";
import RowData from "../../constants/URLS";
import Row from "../row/Row";
export default function Content() {
  return (
    <div className="content-wrapper">
      {RowData.map((el) => {
        return <Row title={el.title} url={el.url} />;
      })}
    </div>
  );
}
//c5a106392e39f6bbd2abd14dd133cbc4
