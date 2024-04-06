export default function WeeklyProgress(props: { theme: ColorTheme }) {
  return (
    <div
      className="content-container align-down-center"
      style={{ backgroundColor: props.theme.body }}
    >
      Weekly Progress
    </div>
  );
}
