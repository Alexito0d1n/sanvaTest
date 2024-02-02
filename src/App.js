import BackgroundImage from "./assets/images/foto1.jpg";
import FirstResultImage from "./assets/images/foto3.png";
import SecondResultImage from "./assets/images/foto4.avif";
import ThirdResultImage from "./assets/images/foto4.avif";
import FourthResultImage from "./assets/images/foto4.avif";
import BackgroundImageQ1 from "./assets/images/Q1.jpg";
import BackgroundImageQ2 from "./assets/images/Q2.jpg";
import BackgroundImageQ3 from "./assets/images/Q3.jpg";
import BackgroundImageQ4 from "./assets/images/Q4.jpg";
import BackgroundImageQ5 from "./assets/images/Q5.jpg";
import BackgroundImageQ6 from "./assets/images/Q6.jpg";
import BackgroundImageQ8 from "./assets/images/Q8.jpg";
import BackgroundImageQ9 from "./assets/images/Q9.jpg";
//import ResponseImage from "./assets/images/foto3.png";
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import "react-buzzfeed-quiz/lib/styles.css";


var color0= "#ffffff",color1= "#f0a1a5", color2="#fec1b2", color3="#fe7f6c", color4="#fbc8d6";
const App = () => {
  return (
    <BuzzFeedQuiz
      title={"¿Qué tipo de persona en la ETSIT eres en San Valentin?" }
      description={"Descúbrelo con este test de personalidad"}
      autoScroll={true}
      onRestart={() => alert("¿Quieres volver a hacer el test?")}
      onResult={() => alert("Presiona OK para ver tu resultado")}
      onAnswerSelection={(questionIndex, answerIndex, resultID) =>
        console.log({
          questionIndex,
          answerIndex,
          resultID,
        })
      }
      facebookShareButton={false}
      facebookShareLink={"www.yourlink.com"}
      twitterShareButton={false}
      twitterShareLink={"www.yourlink.com"}
      copyShareButton={false}
      copyShareLink={"This text was copied using the copyShareLink prop."}
      
      
      questions={[ 
       /* {
          question: "Here's a default question",
          answers: [
            {
              answer: "Answer one",
              resultID: 0,
            },
            {
              answer: "Answer two",
              resultID: 1,
            },
            {
              answer: "Answer three",
              resultID: 2,
            },
          ],
        },*/
        /*{
          question: "Let's add some background and font colors",
          backgroundColor: "rgb(211, 211, 211)",
          fontColor: "#000",
          answers: [
            {
              answer: "First answer",
              backgroundColor: "red",
              fontColor: "rgb(215, 215, 215)",
              resultID: 0,
            },
            {
              answer: "Second answer",
              backgroundColor: "orange",
              fontColor: "green",
              resultID: 1,
            },
            {
              answer: "Third answer",
              backgroundColor: "yellow",
              fontColor: "#000",
              resultID: 2,
              revealResponse: {npm 
                 title: "Here's an answer response!",
                 description: "Here's a description for the answer response!",
                 image: ResponseImage,
                 imageAttribution: "Answer response image attribution text goes here",
              },
            },
          ],
        },*/
        {
          question: "Elige tu team:",
          questionRelativeToImage: "overlap",
          answerArrangement: "tile",
          fontColor: color0,
          backgroundImageSrc: BackgroundImageQ1,
          answers: [
            {
              answer: "BIO",
              resultID: 0,
              backgroundColor: color1,
              fontColor: "rgb(53,51,48)"
            },
            {
              answer: "TELECO",
              resultID: 1,
              backgroundColor: color3,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "DATOS",
              resultID: 3,
              backgroundColor: color4,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "No sé, no voy a clase",
              resultID: 2,
              backgroundColor: color2,
              fontColor: "rgb(53,51,48)",
            },
          ],
        },
        {
          question: "Elige una asignatura:",
          questionRelativeToImage: "overlap",
          answerArrangement: "tile",
          backgroundImageSrc: BackgroundImageQ2,
          fontColor: color0,
          answers: [
            {
              answer: "MMAT",
              resultID: 0,
              backgroundColor: color3,
              fontColor: "rgb(53,51,48)"
            },
            {
              answer: "IACR",
              resultID: 1,
              backgroundColor: color1,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "BIOMECÁNICA",
              resultID: 2,
              backgroundColor: color2,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "INGLÉS",
              resultID: 3,
              backgroundColor: color4,
              fontColor: "rgb(53,51,48)",
            },
          ],
        },
        {
          question: "¿Cuál es tú lugar favorito en la ETSIT?",
          questionRelativeToImage: "overlap",
          answerArrangement: "tile",
          backgroundImageSrc: BackgroundImageQ3,
          fontColor: color0,
          answers: [
            {
              answer: "Cafetería",
              resultID: 2,
              backgroundColor: color2,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Biblioteca",
              resultID: 1,
              backgroundColor: color4,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Puerta del A",
              resultID: 3,
              backgroundColor: color1,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Laboratorios",
              resultID: 0,
              backgroundColor: color3,
              fontColor: "rgb(53,51,48)",
            },
          ],
        },
        {
          question: "¿Qué tal te ves en la carrera?",
          questionRelativeToImage: "overlap",
          answerArrangement: "tile",
          backgroundImageSrc: BackgroundImageQ4,
          fontColor: color0,
          answers: [
            {
              answer: "Acabo de entrar",
              resultID: 1,
              backgroundColor: color3,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Un 5.0 son 6 créditos",
              resultID: 3,
              backgroundColor: color2,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Mejor que en el amor",
              resultID: 0,
              backgroundColor: color1,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Me voy a Magisterio",
              resultID: 2,
              backgroundColor: color4,
              fontColor: "rgb(53,51,48)",
            },
          ],
        },
        {
          question: "¿A quién le mandarias una piruleta?",
          questionRelativeToImage: "overlap",
          answerArrangement: "tile",
          backgroundImageSrc: BackgroundImageQ5,
          fontColor: color0,
          answers: [
            {
              answer: "Grajal",
              resultID: 0,
              backgroundColor: color4,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Nava",
              resultID: 3,
              backgroundColor: color1,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "A mi crush",
              resultID: 1,
              backgroundColor: color2,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Quique Cafeta",
              resultID: 2,
              backgroundColor: color3,
              fontColor: "rgb(53,51,48)",
            },
          ],
        },
        {
          question: "¿Cuál es tu actividad favorita en la ETSIT?",
          questionRelativeToImage: "overlap",
          answerArrangement: "tile",
          backgroundImageSrc: BackgroundImageQ6,
          fontColor: color0,
          answers: [
            {
              answer: "Fumar",
              resultID: 3,
              backgroundColor: color1,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Ir al depor",
              resultID: 1,
              backgroundColor: color2,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Jugar al mus",
              resultID: 2,
              backgroundColor: color3,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Ir a clase",
              resultID: 0,
              backgroundColor: color4,
              fontColor: "rgb(53,51,48)",
            },
          ],
        },
        {
          question: "¿Qué club es tu favorito?",
          questionRelativeToImage: "overlap",
          answerArrangement: "tile",
          backgroundImageSrc: BackgroundImage,
          fontColor: color0,
          answers: [
            {
              answer: "Euri",
              resultID: 3,
              backgroundColor: color1,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Delta",
              resultID: 2,
              backgroundColor: color4,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "ECO  ",
              resultID: 0,
              backgroundColor: color2,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Depor",
              resultID: 1,
              backgroundColor: color3,
              fontColor: "rgb(53,51,48)",
            },
          ],
        },

        {
          question: "¿Qué le regalarias a tu pareja?",
          questionRelativeToImage: "overlap",
          answerArrangement: "tile",
          backgroundImageSrc: BackgroundImageQ8,
          fontColor: color0,
          answers: [
            {
              answer: "Bombones",
              resultID: 2,
              backgroundColor: color2,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Flores",
              resultID: 1,
              backgroundColor: color1,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Piruletas",
              resultID: 3,
              backgroundColor: color3,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Nada, estoy solísim@",
              resultID: 0,
              backgroundColor: color4,
              fontColor: "rgb(53,51,48)",
            },
          ],
        },
        {
          question: "¿Cuál seria tu cita ideal en la ETSIT?",
          questionRelativeToImage: "overlap",
          answerArrangement: "tile",
          backgroundImageSrc: BackgroundImageQ9,
          fontColor: color0,
          answers: [
            {
              answer: "Fumarse un piti en la puerta del A",
              resultID: 3,
              backgroundColor: color1, 
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Ayudar a tu pareja con las prácticas de CELT",
              resultID: 0,
              backgroundColor: color2,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Tomarse algo en mesitas",
              resultID: 1,
              backgroundColor: color3,
              fontColor: "rgb(53,51,48)",
            },
            {
              answer: "Ciberteca & Chill",
              resultID: 2,
              backgroundColor: color4,
              fontColor: "rgb(53,51,48)",
            },
          ],
        },


        /*{
          question: "Here is some adjacent image text",
          questionRelativeToImage: "adjacent",
          answerArrangement: "row",
          backgroundImageSrc: BackgroundImage,
          answers: [
            {
              answer: "Answer one",
              resultID: 0,
            },
            {
              answer: "Answer two",
              resultID: 1,
            },
            {
              answer: "Answer three",
              resultID: 2,
            },
          ],
        },*/
       /*{
          question: "Answers can also trigger a callback function",
          answers: [
            {
              answer: "This one does not trigger a function",
              resultID: 0,
            },
            {
              answer: "Click for answer function",
              onAnswerSelection: (questionIndex, answerIndex, resultID) =>
                alert("This alert is caused by an answer selection!"),
              resultID: 1,
            },
          ],
        },*/
      ]}
     /*  results={[
        {
          title: "Amantes de la ETSIT",
          description: "Basas tu relación en estar juntos en la ETSIT, no os sacan de cafeta ni con agua caliente y Quique se sabe todos vuestros dramas.",
          resultImageSrc: FirstResultImage,
          resultID: 2,
        },
        {
          title: "Enamorad@ de la carrera",
          description: "Te apasiona la carrera, quizás demasiado. Tu lugar favorito es la biblioteca y si pudieras irias a curso y medio por año.",
          resultImageSrc: SecondResultImage,
          resultID: 1,
        },
        {
          title: "SIMP de manual",
          description: "Gobernado por tu pareja, siempre que puedes te vas a la puerta del A para estar con ella y fumaros un piti. Aprovecha y regalale una piruleta.",
          resultImageSrc: ThirdResultImage,

          resultID: 3,
        },
        {
          title: "Solter@ de oro",
          description: "No tienes pareja, pero tienes tu mercado (o eso esperamos). No te preocupes porque el año que viene tengas alguna piruleta.",
          resultImageSrc: FourthResultImage,

          resultID: 0,
        },
      ]} */

      results={[
        {
          title: "Chocolate y Piruleta", //entregado en el amor
          description: "TBD",
          resultImageSrc: FirstResultImage,
          resultID: 2,
        },                                                                 //Haced una frase por cada tipo
        {                                                                  //de perfil que os pongo aquí.
          title: "3 piruletas", //Oferta, espiritu emprendedor             //La idea es que se ponga una 
          description: "TBD",                                              //frase corta divertida y frases
          resultImageSrc: SecondResultImage,                               //que puedan poner en la piruleta o
          resultID: 1,                                                     //bombón que se compren
        },
        {
          title: "1 chocolate", //El alternativo
          description: "TBD",
          resultImageSrc: ThirdResultImage,

          resultID: 3,
        },
        {
          title: "1 piruleta", //el tacaño/rata
          description: "TBD",
          resultImageSrc: FourthResultImage,

          resultID: 0,
        },
      ]}
    />
  );
};
export default App;