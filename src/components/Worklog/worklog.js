import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

import { functionalityEn, selfEvaluationEn, developIssuesEn } from './constants/constants';

import './worklog.css';

const TeamWorklog = () => (
    <>
        <Table responsive='sm' size='md' striped bordered hover>
            <caption>TABLE WITH FUNCTIONALITY AND SPENT HOURS</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Functionality</th>
                    <th>Hours</th>
                </tr>
            </thead>
            <tbody>
                {functionalityEn.map(func => (
                    <tr key={func.func}>
                        <td>{func.number}</td>
                        <td>{func.func}</td>
                        <td>{func.hours}</td>
                    </tr>
                ))}
            </tbody>
        </Table>

        <Table responsive='sm' size='sm' striped bordered hover>
            <caption>MAIN PROBLEMS DURING DEVELOPING PROJECT</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Problem descpirtion</th>
                    <th>Solution</th>
                </tr>
            </thead>
            <tbody>
                {developIssuesEn.map(issue => (
                    <tr key={issue.issue}>
                        <td>{issue.number}</td>
                        <td>{issue.issue}</td>
                        <td>{issue.resolve}</td>
                    </tr>       
                ))}
            </tbody>
        </Table>
        {selfEvaluationEn.map(point => (
            <Form.Check key={point} label={point} defaultChecked disabled></Form.Check>
        ))}
    </>
);

export default TeamWorklog;