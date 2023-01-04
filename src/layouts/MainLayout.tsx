import html2Canvas from "html2canvas";
import jsPDF from "jspdf";

function MainLayout(props: any) {
  function onHandlePrintResume() {
    const input = document.getElementById("mainResume");
    if (input) {
      html2Canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "pt", "a4", false);
        pdf.addImage(imgData, "PNG", 0, 0, 600, 0);
        pdf.save("resume1.pdf");
      });
    }
  }
  return (
    <div className="flex justify-center flex-col gap-5">
      <button onClick={onHandlePrintResume}>Download Resume</button>
      <div className="flex justify-center gap-5" id="mainResume">
        {props.children}
      </div>
    </div>
  );
}

export default MainLayout;
