import React from 'react'
import Head from 'next/head'

class Home extends React.Component {
  state = {
    url: '',
    result: ''
  };

  getUrl = () => {
    const fileId = this.state.url.match(/\/d\/(.*)\/view/);
    let result = '';

    if (fileId && fileId[1]) {
      result = `https://drive.google.com/uc?export=view&id=${fileId[1]}`;
    }

    this.setState({ result });
  };

  render() {
    return (
      <div>
        <Head>
          <title>Home</title>
          <link rel='icon' href='/favicon.ico' />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.12/clipboard.min.js"></script>
        </Head>

        <div className='hero'>
          <h1 className='title'>Obtener URL</h1>

          <div className='row'>
            <div className='inputContainer'>
              <input
                value={this.state.url}
                onChange={(event) => { this.setState({ url: event.target.value }); }}
                className="input"/>
              <button onClick={this.getUrl}>Obtener URL</button>
            </div>

            {
              this.state.result !== '' && <div className='resultContainer'>
                <h4 className='resultLabel'>TU URL PUBLICA</h4>

                <div className='result'>{ this.state.result }</div>
              </div>
            }

          </div>

        </div>

        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .input {
            width: 300px;
          }
          .inputContainer {
            display: flex;
            justify-content: center;
          }
          .resultContainer {
            display: flex;
            justify-content: center;
            flex-direction: column;
          } 
          .resultLabel {
            font-size: 20px;
          }
        `}</style>
      </div>
    );
  }

}
export default Home
