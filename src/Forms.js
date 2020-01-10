import React from 'react'

import firebaseConf from './firebase/firebase'
import registerServiceWorker from './registerServiceWorker';


class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          form: [],
          alert: false,
          alertData: {}
        };
      }
    
      showAlert(type, message) {
        this.setState({
          alert: true,
          alertData: { type, message }
        });
        setTimeout(() => {
          this.setState({ alert: false });
        }, 4000)
      }
    
      resetForm() {
        this.refs.quizForm.reset();
      }
    
      componentWillMount() {
        let formRef = firebaseConf.database().ref('form').orderByKey().limitToLast(6);
        formRef.on('child_added', snapshot => {
          const { enunciado, opcion1, opcion2, opcion3, opcion4, respuesta } = snapshot.val();
          const data = { enunciado, opcion1, opcion2, opcion3, opcion4, respuesta };
          this.setState({ form: [data].concat(this.state.form) });
        })
      }
    
      sendMessage(e) {
        e.preventDefault();
        
        const params = {
          enunciado: this.inputEnunciado.value,
          opcion1: this.inputOp1.value,
          opcion2: this.inputOp2.value,
          opcion3: this.inputOp3.value,
          opcion4: this.inputOp4.value,
          respuesta: this.inputRes.value
          
        };


        if (params.enunciado && params.opcion1 && params.opcion2 && params.opcion3 && params.opcion4 && params.respuesta) {
          firebaseConf.database().ref('form').push(params).then(() => {
            this.showAlert('Exitoso', 'Tu mensaje fue enviado!');
          }).catch(() => {
            this.showAlert('Peligro', 'tu mensaje no pudo ser enviado');
          });
          this.resetForm();
        } else {
          this.showAlert('Cuidado', 'Por favor completa todos los datos');
        };
      }

      // getQuestions(){
      //   return(
      //     firebaseConf.database().ref('form').once('value',
      //     (snapshot) => {
      //       return snapshot.map((snapshot) => ({
      //         key: snapshot.key,
      //         data: snapshot.val()
      //       }))
      //     })
      //   )
      // }


      // updateForm(u){
      //   u.preventDefault();
      //   firebaseConf.database.ref().update(params)
      //   .then(() => {
      //     this.showAlert('Exitoso', 'Las preguntas fueron modificadas!');
      //   });
      // }


      deleteMessage(d){
        d.preventDefault();
        firebaseConf.database().ref()
        .remove()
        .then(() => {
          this.showAlert('Exitoso', 'Las preguntas fueron borradas!');
        });

      }

       
      


    render() {
        return (
            <div>
              {this.state.alert && <div className={`alert alert-${this.state.alertData.type}`} role='alert'>
                <div className='container'>
                  {this.state.alertData.message}
                </div>
              </div>}
              <div className='container' style={{ padding: `40px 0px` }}>
                <div className='row'>
                  <div className='col-sm-4'>
                    <h2>Ingreso de Preguntas</h2>
                    <form onSubmit={this.sendMessage.bind(this)} onReset={this.deleteMessage.bind(this)} ref='quizForm' >
                      <div className='form-group'>
                        <label htmlFor='enunciado'>Enunciado: </label>
                        <input type='text' className='form-control' id='enunciado' placeholder='Enunciado' ref={enunciado => this.inputEnunciado = enunciado} />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='opcion1'>Opción 1: </label>
                        <input type='text' className='form-control' id='opcion1' placeholder='Opcion 1' ref={opcion1 => this.inputOp1 = opcion1} />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='opcion2'>Opción 2: </label>
                        <input type='text' className='form-control' id='opcion2' placeholder='Opcion 2' ref={opcion2 => this.inputOp2 = opcion2} />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='opcion3'>Opción 3: </label>
                        <input type='text' className='form-control' id='opcion3' placeholder='Opcion 3' ref={opcion3 => this.inputOp3 = opcion3} />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='opcion4'>Opción 4: </label>
                        <input type='text' className='form-control' id='opcion4' placeholder='Opcion 4' ref={opcion4 => this.inputOp4 = opcion4} />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='respuesta'>Respuesta: </label>
                        <input type='text' className='form-control' id='respuesta' placeholder='Respuesta' ref={respuesta => this.inputRes = respuesta} />
                      </div>                      
                      <button type='submit' className='btn btn-primary'>Guardar...</button>
                      <button type='reset' className='btn btn-primary' >Borrar</button>
                     

                      

                    </form>
                  </div>
                </div>
              </div>
              <div className='col-sm-8'>
              <div className='row'>
                {this.state.form.map(form =>
                  <div className='col-sm-6' key={form.enunciado} style={{ margin: `0px 0px 30px 0px` }}>
                    <div className='card'>
                      <div className='card-body'>
                        <h4 className='card-title'>{form.key}</h4>
                        <h4 className='card-title'>{form.enunciado}</h4>
                        <h4 className='card-title'>{form.opcion1}</h4>
                        <h4 className='card-title'>{form.opcion2}</h4>
                        <h4 className='card-title'>{form.opcion3}</h4>
                        <h4 className='card-title'>{form.opcion4}</h4>
                        <h4 className='card-title'>{form.respuesta}</h4>

                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
            </div>

            
          );
    }        
}

export default App2; 