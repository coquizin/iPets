import styled from "styled-components";

export const Host = styled.div`
  margin-top: 20px;
  user-select: none;
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-row-gap: 30px;
  justify-content: center;
  grid-template-columns: 100%;

  .step-progress {
    margin-top: 120px;
    padding: 15px 15px 60px 0;
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    align-self: center;
  }

  .step-content {
    margin-top: 40px;
    position: relative;
    align-self: start;
    grid-row: 2 / -1;
    grid-column: 1 / -1;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  position: relative;

  svg#checkbox {
    width: 40px;
    height: 40px;
    stroke: #23c274;
    stroke-width: 6;

    .circle {
      stroke-dasharray: 320;
      stroke-dashoffset: 320;
      fill: #d2d2d2;
      transition: stroke-dashoffset 0.5s,
        fill 0.5s 0.3s cubic-bezier(0.45, 0, 0.55, 1);
    }

    .check {
      stroke-dasharray: 70;
      stroke-dashoffset: 70;
      stroke: #fff;
      fill: none;
      transition: all 0.5s 0.5s cubic-bezier(0.45, 0, 0.55, 1);
    }
  }
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &.active {
    svg#checkbox {
      .circle {
        fill: #edc065;
      }
    }
  }

  &.complete {
    svg#checkbox {
      .circle {
        stroke-dashoffset: 0;
        fill: #23c274;
      }

      .check {
        stroke-dashoffset: 0;
      }
    }
  }
`;

export const CheckBoxInfo = styled.div`
  position: absolute;
  bottom: -50px;
  display: grid;
  margin: 0 -20px;
  grid-template-columns: max-content;

  @media (min-width: 768px) {
    margin: 0 -35px;
  }

  span.progress-info {
    text-transform: capitalize;
    font-size: 11px;
    display: inline-block;
    margin-left: 5px;
    padding: 2px 10px;
    transform: translateY(6px);
    font-weight: 500;
    color: currentColor;
    background: #eee;
    border-radius: 20px;
    transition: background-color 0.1s ease-in-out;
  }

  span.progress-info.in-progress {
    background-color: #234dc2;
    color: #fff;
  }

  span.progress-info.completed {
    background-color: #23c274;
    color: #fff;
  }

  span.step {
    margin-left: 10px;
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 0.5px;
    font-size: 11px;
    color: #777;
  }
`;

export const ProgressLine = styled.div`
  width: 60px;
  margin: 0 10px;
  height: 4px;
  overflow: hidden;
  display: inline-block;
  background: #d2d2d2;
  border-radius: 10px;

  @media (min-width: 450px) {
    width: 66px;
  }

  @media (min-width: 768px) {
    width: 140px;
  }

  &.active {
    .progress-percent {
      background: #edc065;
      width: 20%;
    }
  }

  &.complete {
    .progress-percent {
      width: 100%;
      background: #23c274;
    }
  }

  .progress-percent {
    height: 100%;
    transition: width 0.5s;
  }
`;
