import React from 'react';

import TeamWorkLog from '../../components/Worklog/worklog';
import Layout from '../../components/layout';

const Worklog = ({ location }) => (
    <Layout location={location}>
        <div className="container-fluid">
            <section className="worklog">
                <TeamWorkLog />
            </section>
        </div>
    </Layout>
);

export default Worklog;
