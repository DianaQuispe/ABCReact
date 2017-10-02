

let num = 0;
let game =
[
 { 
  question : 'Which is the oldest airline in the world?',
  answers: ["Avianca", 'KLM', 'Qantas'],
  answerGood: 'KLM',
  image:' images/plane.svg',
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
    }
    onClick(e) {
        var game = {
            question : this.state.question,

        };
        this.setState( {
            question ='',
            answers : this.state.game.answers
        });
    }
    render( ) {
        // const appGame = this.state.game.map
        return(
            return(
                <div>
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Do you want to learn how to build React apps like this?</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                        </div>
                        <div className="modal-body">
                            Learn <b>React</b> from scratch with me, it's easy!
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Yes, let's go!</button>
                        </div>
                    </div>
                </div>
            </div>
            <section className="contenedor container-fluid text-center">
                <div className="row">
                    <div className="col-md-12">
                        <div id="divInterno">
                            <div className="row">
                                <div id="questions">
                                    <div key= {game.question}>
                                        {game[0]}
                                        </div>
                                 
                                </div>
                                <div className="col-md-12 container-fluid">
                                    <div className="answers row">
            
                                    </div>
            
                                </div>
            
                            </div>
                            <div className="social text-center">
                                <a href="#" className="btn btn-default btn-circle"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="btn btn-default btn-circle"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="btn btn-default btn-circle"><i className="fa fa-google-plus"></i></a>
            
            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="row">
                <div className="col-md-12">
            
                    <a href="images/bus.svg"></a>
                    <a href="images/bus.svg"></a>
            
                </div>
            </div>
            </div>
              )
        )
    }

}

ReactDOM.render( 
  <App title="RESERVA DE ASIENTOS" game={game} / >, document.getElementById('root'));