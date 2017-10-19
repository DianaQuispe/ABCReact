

let num = 0;
let game =
[
 { 
  question : 'Which is the oldest airline in the world?',
  answers: ["Avianca", 'KLM', 'Qantas'],
  answerGood: 'KLM',
  image:' ./images/plane.svg',
},
{ 
  question : '1 is the oldest airline in the world?',
 answers: ["Avianca", 'KLM', 'Qantas'],
 answerGood: 'KLM',
 image:' images/plane.svg',
},
{ 
  question : '2 is the oldest airline in the world?',
 answers: ["Avianca", 'KLM', 'Qantas'],
 answerGood: 'KLM',
 image:' images/plane.svg',
},
{ 
  question : '3 is the oldest airline in the world?',
 answers: ["Avianca", 'KLM', 'Qantas'],
 answerGood: 'KLM',
 image:' images/plane.svg',
},
{ 
  question : '4 is the oldest airline in the world?',
 answers: ["Avianca", 'KLM', 'Qantas'],
 answerGood: 'KLM',
 image:' images/plane.svg',
},
{ 
  question : '5 is the oldest airline in the world?',
 answers: ["Avianca", 'KLM', 'Qantas'],
 answerGood: 'KLM',
 image:' images/plane.svg',
},
]

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            question: props.game[0].question,
            answers : props.game[0].answers,
            image : props.game[0].image,

        };
         console.log(this.state)
    }
    header() {
        return(
           <div>
        <div className="fixed">
<a
href="#"
data-toggle="modal"
data-target="#exampleModal"
className="btn btn-default btn-circle">
<i
onclick="myFunction(this)"
className="fa fa-info-circle fa-3x"
aria-hidden="true" />
</a>
        </div>
        <div className="container text-center">
          <div className="row">
            <img
id="imagenes"
height={250}
width={250}
src ={this.state.image}
className="img-responsive center-block" />
          </div>
        </div>
      </div>

        )
    }
render ( ) {
 return(
    <div>
        {this.header()}
        <div
className="modal fade"
id="exampleModal"
tabIndex={-1}
role="dialog"
aria-labelledby="exampleModalLabel"
aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5
className="modal-title"
id="exampleModalLabel">
Do you want to learn how to build React apps like this?
</h5>
                <button
type="button"
className="close"
data-dismiss="modal"
aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Learn <b>React</b> from scratch with me, it's easy!
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
Yes, let's go!
</button>
              </div>
            </div>
          </div>
        </div>
        <section className="contenedor container-fluid text-center">
          <div className="row">
            <div className="col-md-12">
              <div id="divInterno">
                <div className="row">
                  <div id="questions" />
                  {this.state.question}
                  <div className="col-md-12 container-fluid">
                    <div className="answers row">
                   <div className="col-md-4">
                            <a
                    href="#"
                    id="${j}"
                    className="'${j}'btn btnQuiz btn-default btn-block"><i className="fa fa-user" />'${app.item.answers[0][j]}'</a>
                    </div>
                        {this.state.answers}
                    </div>
                  </div>
                </div>
                <div className="social text-center">
                  <a
href="#"
className="btn btn-default btn-circle">
<i className="fa fa-twitter" />
</a>
                  <a
href="#"
className="btn btn-default btn-circle">
<i className="fa fa-facebook" />
</a>
                  <a
href="#"
className="btn btn-default btn-circle">
<i className="fa fa-google-plus" />
</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="row">
          <div className="col-md-12">
            <a href="images/bus.svg" />
            <a href="images/bus.svg" />
          </div>
        </div>
      </div>

 )
              
    }

}

ReactDOM.render( 
  <App title="RESERVA DE ASIENTOS" game={game} / >, document.getElementById('root'));
