from pydantic import BaseModel, Field, StrictInt, StrictStr
from typing import List, Optional, Union, Dict
from typing_extensions import Annotated

class Response(BaseModel):
    set_id: StrictStr = Field(description="Identifier of the set. Typically a user-id.", alias="setId")
    id: Annotated[str, Field(strict=True)] = Field(description="Identifier for the data source (variable)")
    status: StrictStr = Field(description="Status as stage in the workflow of creating and coding a variable's value")
    value: Optional[Union[List[bool], List[float], List[str], bool, float, str]]
    subform: Optional[StrictStr] = Field(default=None, description="If variables i. e. data source ids are not unique in the unit, 'subform' can specify the sub object related to the specific variable.")
    code: Optional[StrictInt] = Field(default=None, description="Code representing the category of the value after coding process.")
    score: Optional[StrictInt] = Field(default=None, description="This value represents the result evaluation of the code after coding process.")
    coding_probabilities: Optional[Dict[StrictStr, float]] = Field(default=None, description="This value represents probabilities of given codes after coding process.", alias="codingProbabilities")

