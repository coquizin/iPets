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
    <div className="space-y-5">
      <Container className="relative flex justify-center p-6">
        {options.map((option: string, index: number) => {
          return (
            <CheckBox
              key={index}
              className={`${orderId > index && "complete"} ${
                orderId === index && "active"
              } flex items-center relative`}
            >
              <svg
                className="w-10 h-10 stroke-[#23c274]"
                id="checkbox"
                strokeWidth={6}
                viewBox="0 0 100 100"
              >
                <circle
                  className={` ${
                    orderId === index
                      ? "fill-[#edc065]"
                      : orderId > index
                      ? "fill-[#23c274]"
                      : "fill-[#d2d2d2]"
                  }
                  ease-[cubic-bezier(0.45, 0, 0.55, 1)] transition-all duration-500`}
                  style={{
                    strokeDashoffset: orderId > index ? "0px" : "320px",
                    strokeDasharray: "320px",
                  }}
                  cx="50.5"
                  cy="49"
                  r="45"
                />
                <polyline
                  className="check stroke-[#fff] fill-none transition-all delay-500 duration-500 ease-[cubic-bezier(0.45, 0, 0.55, 1)]"
                  style={{
                    strokeDashoffset: orderId > index ? "0px" : "70px",
                    strokeDasharray: "70px",
                  }}
                  points="28.5,51.9 41.9,65.3 72.5,32.8 "
                />
              </svg>
              {index + 1 < options.length && (
                <ProgressLine
                  className={`md:w-[140px] w-[60px] h-1 bg-[#d2d2d2] overflow-hidden inline-block mx-[10px] rounded-[10px] `}
                >
                  <div
                    className={`${
                      orderId === index
                        ? "w-1/4 bg-[#edc065]"
                        : orderId > index
                        ? "w-full bg-[#23c274]"
                        : "fill-[#d2d2d2]"
                    } progress-percent h-full transition-[width] duration-500 delay-500 `}
                  ></div>
                </ProgressLine>
              )}
              <CheckBoxInfo className="absolute -bottom-11 -mx-4 md:-mx-9 grid grid-cols-[max-content] text-black">
                <div className="md:max-w-[120px] max-w-[70px] text-center font-medium md:text-[0.845rem] text-xs h-8 justify-start">
                  <span className="hidden md:inline-block">{index + 1}.</span>{" "}
                  {option}
                </div>
              </CheckBoxInfo>
            </CheckBox>
          );
        })}
      </Container>

      <div className="!mt-16 step-content">{children}</div>
    </div>
  );
}
