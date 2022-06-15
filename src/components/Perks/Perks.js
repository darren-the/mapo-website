import './Perks.css'

const Perks = () => {
  return (
    <div className="perks-container">
      <div className="perks-grid">

        <div className="perk-text-container">
          <div className="perk-header">Simple Contracts</div>
          <div className="perk-desc-container" id="perk-desc-1">
            <div className="perk-desc-bold">Pay a monthly subscription, </div>
            <div className="perk-desc-normal">cutting out time from negotiating deal terms for each new project</div>
          </div>
        </div>

        <div className="perk-text-container">
          <div className="perk-header">Better than a Contractor</div>
          <div className="perk-desc-container" id="perk-desc-2">
            <div className="perk-desc-bold">Mapo is your full-time designer </div>
            <div className="perk-desc-normal">that ships high-quality designs quickly</div>
          </div>
        </div>

        <div className="perk-text-container"  >
          <div className="perk-header">Quality Guarantee</div>
          <div className="perk-desc-container" id="perk-desc-3">
            <div className="perk-desc-normal">Request </div>
            <div className="perk-desc-bold">designs with unlimited revisions until you're satisfied </div>
            <div className="perk-desc-normal">at no extra cost</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Perks