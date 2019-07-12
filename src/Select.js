import React, { useRef, useEffect } from "react";

export default ({
  name,
  label,
  value,
  disabled,
  onChange,
  id,
  children,
  defaultOption
}) => {
  const ref = useRef();
  useEffect(() => {
    console.log({ ref })
  });
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <div className="select-container" onClick={() => ref.current && ref.current.click()}>
        <select id={id} name={name} value={value} onChange={onChange} disabled={disabled} ref={ref}>
          {defaultOption && <option value="" hidden>{defaultOption}</option>}
          {children}
        </select>
        <div className="select-arrow">
          <img width="12" height="12" alt="" src="data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDkuMjgyOCA0Ljg5ODE3IiBpZD0iY29tcC1qeTBhb25uY2ljb24iIGNsYXNzPSJzdHlsZS1qeTBhb25wMGljb24iPjxkZWZzPjwvZGVmcz48dGl0bGU+YXJyb3cmYW1wO2FtcDt2PC90aXRsZT48cGF0aCBkPSJNNC42NDExNiw0Ljg5ODE3YS41MDAxLjUwMDEsMCwwLDEtLjM0Mjc3LS4xMzU3NEwuMTU3MjcuODY0NDhBLjUwMDE4LjUwMDE4LDAsMCwxLC44NDI4Mi4xMzZMNC42NDExNiwzLjcxMTY1LDguNDQuMTM2YS41MDAxOC41MDAxOCwwLDAsMSwuNjg1NTUuNzI4NTJMNC45ODM5Myw0Ljc2MjQzQS41MDAxLjUwMDEsMCwwLDEsNC42NDExNiw0Ljg5ODE3WiIgY2xhc3M9InN0eWxlLWp5MGFvbnAwX2Nscy0xIj48L3BhdGg+PC9zdmc+" />
        </div>
      </div>
    </div>
  );
}
