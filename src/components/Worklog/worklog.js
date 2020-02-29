import React from "react"
import Form from "react-bootstrap/Form"


import "./worklog.css"
import { getFields } from "../../utils/fields"

const TeamWorkLog = ({ workLog, source, lang }) => {
  const { works, problems, selfEvaluation, selfEvaluationSum } = workLog
  return (
    <>
      <table className="table table-hover">
        <caption>{getFields("worksTableCaption", source, lang)}</caption>
        <thead>
          <tr>
            <th>{getFields("dateWorksTable", source, lang)}</th>
            <th>{getFields("infoWorksTable", source, lang)}</th>
            <th>{getFields("developerWorksTable", source, lang)}</th>
            <th>{getFields("timeSpentWorksTable", source, lang)}</th>
          </tr>
        </thead>
        <tbody>
          {works.map((el, i) => (
            <tr key={i}>
              <td>{el.date}</td>
              <td>{el.info}</td>
              <td>{el.developer}</td>
              <td>{el.timeSpent} {getFields("unitTimeWorksTable", source, lang)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="table table-hover">
        <caption>{getFields("captionProblemsTable", source, lang)}</caption>
        <thead>
          <tr>
            <th>{getFields("descriptionProblemsTable", source, lang)}</th>
            <th>{getFields("solutionProblemsTable", source, lang)}</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((el, i) => (
            <tr key={i}>
              <td>{el.problem}</td>
              <td>{el.solution}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <section>
        <h2>{getFields("selfEvaluationHeader", source, lang)}</h2>
        {selfEvaluation.map((point, i) => (
          <Form.Check key={i} label={point.data} defaultChecked={point.ok==='true'} disabled />
        ))}
        <h3>{getFields("selfEvaluationSumHeader", source, lang)} {selfEvaluationSum}</h3>
      </section>
    </>
  )
}

export default TeamWorkLog
