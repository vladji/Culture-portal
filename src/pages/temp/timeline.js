import React from 'react'
import { Timeline as VerticalTimeline, TimelineItem }  from 'vertical-timeline-component-for-react'
import PropTypes from 'prop-types'

const mockData = [
      {
        date: '1966',
        description: 'Закончил Белорусский государственный университет',
      },
      {
        date: '1968 - 1973',
        description: 'Работал литературным сотрудником газеты «Літаратура і мастацтва',
      },
      {
        date: '1975—1989',
        description: 'Основатель и художественный руководитель мастерской мультфильмов киностудии «Беларусьфильм»',
      },
      {
        date: '1989-1995',
        description: 'Основатель и художественный руководитель анимационных студий, в том числе студии «АВС»',
      },
      {
        date: '1995',
        description: 'Вице-президент киновидеостудии «Кадр-2»',
      },
      {
        date: '1996',
        description: 'Член Белорусского союза журналистов, Белорусского союза кинематографистов, Белорусского союза художников и Белорусского народного фронта «Возрождение»',
      },
      {
        date: '2005 - 2006',
        description: 'Автор книги «Мой Город» (2005 г.) и сборника стихов «Казантипская тетрадь» (2006 г.)',
      }
]

const Timeline = ({ data = mockData }) => {
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
  )
}

export default Timeline