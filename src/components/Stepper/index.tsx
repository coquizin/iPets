import { useCreateAccountScreen } from "@/stores/useCreateAccount";
import {
  CheckBox,
  CheckBoxInfo,
  Container,
  Host,
  ProgressLine,
} from "./styles";

export default function Stepper({ children, options }: any) {
  const orderId = useCreateAccountScreen((state) => state.data.orderId);

  return (
    <Host>
      <Container>
        {options.map((option: string, index: number) => {
          return (
            <CheckBox
              key={index}
              className={`${orderId > index && "complete"} ${
                orderId === index && "active"
              }`}
            >
              <svg id="checkbox" viewBox="0 0 100 100">
                <circle className="circle" cx="50.5" cy="49" r="45" />
                <polyline
                  className="check"
                  points="28.5,51.9 41.9,65.3 72.5,32.8 "
                />
              </svg>
              {index + 1 < options.length && (
                <ProgressLine
                  className={`${orderId > index && "complete"} ${
                    orderId === index && "active"
                  }`}
                >
                  <div className="progress-percent"></div>
                </ProgressLine>
              )}
              <CheckBoxInfo>
                <div className="max-w-[120px] text-center font-medium text-xs md:text-sm h-8 justify-start">
                  <span className="hidden md:inline-block">{index + 1}.</span>{" "}
                  {option}
                </div>
              </CheckBoxInfo>
            </CheckBox>
          );
        })}
      </Container>
      <div className="step-content">{children}</div>
    </Host>
  );
}
