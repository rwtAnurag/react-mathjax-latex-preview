





import React, {Component} from 'react'
import PropTypes from 'prop-types'
import loadScript from 'load-script'

const SCRIPT = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS-MML_SVG'

 class Main extends Component {
  // static propTypes = {
  //   className: PropTypes.string,
  //   style: PropTypes.string,
  //   math: PropTypes.string,
  // }

  // static defaultProps = {
  //   math: ''
  // }

  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      loader:true,
      oldMath: ""
    }
  }

  onLoad = (err) => {
    this.setState({
        loaded: true
    })
    if (err){
      console.log(err)
    }
    else {
        window.MathJax.Hub.Config({jax: ["input/TeX", "output/SVG"],
        showMathMenu: false,
        "fast-preview": {disabled:true},
        typeset: false,
        extensions: [
          "toMathML.js",
          "TeX-AMS-MML_HTMLorMML.js",
        ],
        tex2jax:
          {
            inlineMath: [['$','$'],['\\(','\\)']] ,
            preview: "none",
          },
        SVG: {
            useFontCache: false,
            useGlobalCache: false,
            EqnChunk: 1000000,
            EqnDelay: 1000,
            font: "STIX-Web"
        }
      })
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, this.preview])
    }
  }

  componentDidMount() {
    this.preview.innerHTML =  this.props.math
    this.state.loaded ?  window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, "MathOutput"]):
    loadScript(SCRIPT, this.onLoad)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!nextProps.math) return false
    return nextProps.math !== this.state.oldMath
  }
  componentDidUpdate(prevProps, prevState) {
    this.preview.innerHTML = this.props.math
    // MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, this.preview])
    this.state.loaded?  window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, "MathOutput"]):
     loadScript(SCRIPT, this.onLoad)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({oldMath: ""})
  }

  render() {
    return (
      <div
        className={this.props.className}
        id='react-mathjax-preview'
        style={this.props.style}
      >
        <div
          id='react-mathjax-preview-result'
          ref={(node,t) => {  
            this.preview = node
          }}
        >
        </div>
      </div>
    )
  }
}
export default  React.memo(Main) 