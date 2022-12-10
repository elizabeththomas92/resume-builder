import html2Canvas from "html2canvas";
import jsPDF from "jspdf";

function MainLayout(props: any) {
  function onHandlePrintResume() {
    const input = document.getElementById("mainResume");
    console.log("input", input);
    if (input) {
      html2Canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png", 1.0);
        const pdf = new jsPDF({
          orientation: "portrait",
        });
        console.log(
          "getWidth",
          pdf.internal.pageSize.getWidth(),
          "getHeight",
          pdf.internal.pageSize.getHeight()
        );
        pdf.addImage(
          imgData,
          "JPEG",
          0,
          0,
          pdf.internal.pageSize.getWidth(),
          // pdf.internal.pageSize.getHeight()
          400
        );
        pdf.save("resume1.pdf");
      });
    }
  }
  return (
    <div className="flex justify-center gap-5">
      <button onClick={onHandlePrintResume}>Download Resume</button>
      <div id="mainResume">{props.children}</div>
    </div>
  );
}

export default MainLayout;
