import React from 'react'
import styles from './index.module.css'
import { ListItem } from './ListItem'

export function FrequentlyAsked() {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>Frequently asked <span>questions</span></div>
      <div className={styles['list-items']}>
          <ListItem
              question={'What are the requirements to get a visa?'}
              answer={"The requirement depends on the country you’re applying to. Log in to see different countries and their requirements."}
          />

          <ListItem
              question={'How long does the visa processing take?'}
              answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          />

          <ListItem
              question={'Can I still be approved if I have no travel history?'}
              answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
          />

          <ListItem
              question={"How does VISAPROF obtain a visa for me?"}
              answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          />

          <ListItem
              question={"Do I need my passport at early stages of application?"}
              answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          />

          <ListItem
              question={"Must I be vaccinated to travel abroad?"}
              answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          />
      </div>
    </div>
  )
}