import { useAtom } from "jotai";
import { currentUiAtom } from "../state";
import { Ui } from "../Ui";
import Upload from "../components/Upload";

export default function UploadPage() {
  const [currentUi] = useAtom(currentUiAtom);
  const upload = Upload()
  console.log('currentUi', currentUi)
  if (currentUi != Ui.Upload) {
    return null;
  }
  const result = (
    <div className="flex flex-col justify-center items-center gap-8 pt-32 w-1/2 h-full">
       {upload}
    </div>
  );

  return result;
}
