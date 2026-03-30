/**
 * Renders the two cursor DOM nodes (#cur-dot and #cur-ring).
 * The actual mouse-tracking logic lives in src/hooks/useCursor.js
 * and is called once from App.jsx.
 */
export default function Cursor() {
  return (
    <>
      <div id="cur-dot"/>
      <div id="cur-ring"/>
    </>
  )
}
