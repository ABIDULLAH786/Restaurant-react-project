import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

export default function Dishdetail(props) {
  console.log(props.comments)
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.comments} />
        </div>
      </div>
    </div>
  );
}
function RenderComments({comments} ) {
 
  const comment = comments.map((comm)=>{
    return(
      <>
     
      <CardTitle>{comm.comment}</CardTitle>
      <CardText>
        -- {comm.author}
        {" ,"}
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }).format(new Date(Date.parse(comm.date)))}
      </CardText>
      </>
    )
  });
  return (
    <div  className="my-1">
       <h2>Comments</h2>
      {comment}
    </div>
  );
}
function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg top src={dish[0].image} alt={dish[0].name} />
      <CardBody>
        <CardTitle>{dish[0].name}</CardTitle>
        <CardText>{dish[0].description}</CardText>
      </CardBody>
    </Card>
  );
}
