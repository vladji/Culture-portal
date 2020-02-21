import React from 'react'
import { Timeline as VerticalTimeline, TimelineItem }  from 'vertical-timeline-component-for-react'
import PropTypes from 'prop-types'

const Timeline = ({ data }) => {
  const items = data.map((el) => {
    return (
        <TimelineItem
          key={el.description}
          dateText={el.date}
          dateInnerStyle={{textAlign: 'center', backgroundColor: '#4bbf73'}}
        >
        <p>
          {el.description}
        </p>
      </TimelineItem>
    )
  })

  return (
    <VerticalTimeline>
      {items}
    </VerticalTimeline>
  )
}

Timeline.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape(
      {
        date: PropTypes.string,
        description: PropTypes.string,
      }
    )
  ).isRequired
}

export default Timeline