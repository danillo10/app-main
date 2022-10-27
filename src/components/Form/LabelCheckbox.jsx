import { Label, CheckboxLabel } from './styled'

const Component = ({ name, label, formik, checked }) => {
  return (
    <>
      <CheckboxLabel>
        <input
          type='checkbox'
          id={name}
          name={name}
          value={formik.values[name]}
          onChange={formik.handleChange}
          defaultChecked={checked}
        />
        <Label>
          <label htmlFor={name}>{label}</label>
          <div>
            {formik.touched[name] && formik.errors[name] ?
              formik.errors[name] :
              null}
          </div>
        </Label>
      </CheckboxLabel>
    </>
  )
}

export default Component