import React, { Fragment } from 'react'

interface Props {
  detailed_description: string
}

const Ingredients = (props: Props) => {
  const { detailed_description } = props
  if (!detailed_description) return null

  return (
    <div>
      {detailed_description.includes('Інгредієнти:') ? (
        detailed_description.split('Інгредієнти:').map((part, index) => (
          <Fragment key={index}>
            {index === 0 && part && (
              <h4 className="mb-2 text-sm lg:text-base">{part}</h4>
            )}
            {index === 1 && (
              <div className="flex flex-col gap-2">
                <h5 className="mt-2 font-semibold">Інгредієнти:</h5>
                <p className="font-unbounded text-brown text-sm font-light lg:text-base">
                  {part}
                </p>
              </div>
            )}
          </Fragment>
        ))
      ) : (
        <h4 className="text-sm lg:text-base">{detailed_description}</h4>
      )}
    </div>
  )
}

export default Ingredients
