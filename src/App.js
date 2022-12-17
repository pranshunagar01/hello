import "./styles.css";
import {
  SandpackLayout,
  SandpackProvider,
  SandpackFileExplorer,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackConsole,
  SandpackThemeProvider
} from "@codesandbox/sandpack-react";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";

export default function App() {
  return (
    <SandpackProvider template="react">
      <SandpackThemeProvider>
        <SandpackCodeEditor />
      </SandpackThemeProvider>
    </SandpackProvider>
  );
}
