import React from 'react'
import { Timeline as VerticalTimeline, TimelineItem }  from 'vertical-timeline-component-for-react'
import PropTypes from 'prop-types'

const Timeline = ({ data }) => {
  const items = data.map((el, id) => {
    return (
        <TimelineItem
          key={el.description || id}
          dateText={el.date}
          dateStyle={{ backgroundColor: "#4bbf73", textAlign: "center"}}
          dateInnerStyle={{backgroundColor: "#ffffff", border: "2px solid #4bbf73", color: "#1a1a1a"}}
        >
        <p>
          {el.description}
        </p>
      </TimelineItem>
    )
  })

  return (
    <VerticalTimeline lineColor={ "#cccccc"}>
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
